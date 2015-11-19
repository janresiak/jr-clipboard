angular.module('jr.clipboard', [])
    .directive('clipboard', [function () {

        var copy = function (value) {
            var setValueToCopy = function (e) {
                e.clipboardData.setData('text/plain', value);
                e.preventDefault();
            };

            document.addEventListener('copy', setValueToCopy);
            document.execCommand('copy');
            document.removeEventListener('copy', setValueToCopy);
        };

        return {
            restrict: 'AE',
            scope: {
                copy: '='
            },
            link: function (scope, element, attrs) {

                element.bind('click', function () {
                    copy(scope.copy);
                });

            }
        };

    }]);
