
const OBSERVER = function (query) {

    console.log('in method', query, this)

    var intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (function () {
                    console.log('success')
                    entry.target.classList.add('showUp')
                    intersectionObserver.unobserve(entry.target)
                })();
            }
        });
    })
    query.forEach(entry => {
        intersectionObserver.observe(entry)
    });
}

export default OBSERVER