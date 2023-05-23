
      var longestCommonPrefix = function(strs) {
        if (strs.length === 0) {
          return '';
        }

        var prefix = strs[0].toLowerCase();

        for (var i = 1; i < strs.length; i++) {
          var currentString = strs[i].toLowerCase();
          while (currentString.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === '') {
              return '';
            }
          }
        }

        return prefix;
      };

      var inputFields = document.getElementById('input-fields');
      var addInputButton = document.getElementById('add-input');
      var findPrefixButton = document.getElementById('find-prefix');
      var resetButton = document.getElementById('reset');
      var resultContainer = document.getElementById('result');

      addInputButton.addEventListener('click', function() {
        var newInput = document.createElement('div');
        newInput.classList.add('input-group');
        newInput.innerHTML = '<input type="text" placeholder="Enter string" required>';
        inputFields.appendChild(newInput);
      });

      findPrefixButton.addEventListener('click', function() {
        var inputs = document.querySelectorAll('#input-fields input');
        var stringsArray = Array.from(inputs).map(function(input) {
          return input.value;
        });
        var result = longestCommonPrefix(stringsArray);
        resultContainer.textContent = 'Longest Common Prefix: ' + result;
      });

      resetButton.addEventListener('click', function() {
        var inputs = document.querySelectorAll('#input-fields input');
        inputs.forEach(function(input) {
          input.value = '';
        });
        resultContainer.textContent = '';
      });
