angular.module('jr.clipboard', [])
    .directive('clipboard', [function() {

        return {
            restrict: 'AE',
            scope: {
                copy: '='
            },
            link: function(scope, element, attrs) {

                var copy = function(value) {
                    var setValueToCopy = function (e) {
                        e.clipboardData.setData('text/plain', value);
                        e.preventDefault();
                    };
                    document.addEventListener('copy', setValueToCopy);

                    document.execCommand('copy');
                    document.removeEventListener('copy', setValueToCopy);
                };

                element.bind('click', function(e) {
                    copy(scope.copy);
                });

            }
        };

    }]);
