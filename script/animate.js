const div = document.querySelector('div')
const p = document.querySelector('p')
const btn500 = document.querySelector('.btn500')
const btn800 = document.querySelector('.btn800')
function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            if (callback) {
                callback()
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 1)
}