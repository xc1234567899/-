(function close() {
    const container = document.querySelector('#container')
    const close = document.querySelector('.close')
    close.addEventListener('click', function () {
        container.style.display = 'none'
    })
})();

(function searchInput() {
    const searchInput = document.querySelector('.search .change_searchinput')
    const searchInputData = ["奶瓶消毒器", "格力变频空调", "微单相机", "芭比娃娃", "电脑主机", "华为平板电脑"];
    let i = 0;
    setInterval(function () {
        searchInput.placeholder = searchInputData[i]
        i++;
        if (i >= searchInputData.length) {
            i = 0;
        }
    }, 2000)
})();

(function topSearchinput() {
    const top_searchinput = document.querySelector('.top_searchinput')
    window.addEventListener('scroll', function () {
        const n = document.documentElement.scrollTop
        top_searchinput.style.top = n >= 600 ? 0 : '-80px'
    })
})();

(function carousel() {
    const imgs = document.querySelectorAll('.carousel img')
    const prev = document.querySelector('.carousel .prev')
    const next = document.querySelector('.carousel .next')
    const carousel = document.querySelector('.carousel')
    let i = 0
    function toggle(){
        for (let j = 0; j < imgs.length; j++) {
            imgs[j].style.opacity = 0
        };
        imgs[i].style.opacity = 1;
        document.querySelector('.carousel .active').classList.remove('active')
        document.querySelector(`.carousel li:nth-child(${i + 1})`).classList.add('active')
    }
    next.addEventListener('click', function () {
        i++
        i = i >= imgs.length ? 0 : i;
        toggle()
    })
    prev.addEventListener('click', function () {
        i--;
        i = i < 0 ? imgs.length-1 : i;
        toggle()
    })
    let n = setInterval(() => {
        next.click()
    }, 3000)
    carousel.addEventListener('mouseenter', function () {
        clearInterval(n)
    })
    carousel.addEventListener('mouseleave', function () {
        clearInterval(n);
        n = setInterval(() => {
            next.click()
        }, 3000)
    })
})();

(function carousel2() {
    const topImg = document.querySelectorAll('.top img')
    const midImg = document.querySelectorAll('.mid img')
    const underImg = document.querySelectorAll('.under img')
    const prev = document.querySelector('.carousel2 .prev')
    const next = document.querySelector('.carousel2 .next')
    const carousel2 = document.querySelector('.carousel2')
    let i = 0
    let j = 0
    let h = 0
    next.addEventListener('click', function () {
        i++;
        i = i >= topImg.length ? 0 : i;
        for(let n = 0;n < topImg.length;n++){
            topImg[n].style.opacity = 0
        }
        topImg[i].style.opacity =1
        j++;
        j = j >= midImg.length ? 0 : j;
        for(let m = 0;m < topImg.length;m++){
            midImg[m].style.opacity = 0
        }
        midImg[j].style.opacity =1
        h++;
        h = h >= underImg.length ? 0 : h;
        for(let s = 0;s < topImg.length;s++){
            underImg[s].style.opacity = 0
        }
        underImg[h].style.opacity = 1
    })
    prev.addEventListener('click', function () {
        i--;
        i = i < 0 ? topImg.length-1 : i;
        for(let n = 0;n < topImg.length;n++){
            topImg[n].style.opacity = 0
        }
        topImg[i].style.opacity =1
        j--;
        j = j < 0  ? midImg.length-1 : j;
        for(let m = 0;m < topImg.length;m++){
            midImg[m].style.opacity = 0
        }
        midImg[j].style.opacity =1
        h--;
        h = h < 0 ? midImg.length-1 : h;
        for(let s = 0;s < underImg.length;s++){
            underImg[s].style.opacity = 0
        }
        underImg[h].style.opacity = 1
    })
    let n = setInterval(() => {
        next.click()
    }, 5000)
    carousel2.addEventListener('mouseenter', function () {
        clearInterval(n)
    })
    carousel2.addEventListener('mouseleave', function () {
        clearInterval(n);
        n = setInterval(() => {
            next.click()
        }, 5000)
    })
})();

(function elevator() {
    const lists = document.querySelector('.jd_elevator_list')
    lists.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            const old = document.querySelector('.jd_elevator_list .active')
            if (old) old.classList.remove('active')
            e.target.classList.add('active')
        }
    })

    window.addEventListener('scroll', function () {
        const old = document.querySelector('.jd_elevator_list .active')
        if (old) old.classList.remove('active')
        const seckill = document.querySelector('#seckill')
        const channel = document.querySelector('#channel')
        const recommend = document.querySelector('#recommend')
        const n = document.documentElement.scrollTop
        if (n >= seckill.offsetTop && n < channel.offsetTop) {
            document.querySelector('[data-name=seckill]').classList.add('active')
        } else if (n >= channel.offsetTop && n < recommend.offsetTop) {
            document.querySelector('[data-name=channel]').classList.add('active')
        } else if (n >= recommend.offsetTop) {
            document.querySelector('[data-name=recommend]').classList.add('active')
        }

    })
})();

function seckilltime() {
    const now = +new Date()
    const last = +new Date('2023-12-23 12:00:00')
    const count = (last - now) / 1000
    let h = parseInt(count / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    let m = parseInt(count / 60 % 60)
    m = m < 10 ? '0' + m : m
    let s = parseInt(count % 60)
    s = s < 10 ? '0' + s : s
    const hour = document.querySelector('.time .hour')
    const minutes = document.querySelector('.time .minutes')
    const seconds = document.querySelector('.time .seconds')
    const time = document.querySelector('.seckill_time .time')
    hour.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    if(h > 0 || m > 0 || s > 0){
        time.style.opacity = 1
    }
    if(h <= 0 && m <= 0 && s <= 0){
        clearInterval(n);
        time.style.opacity = 0
    }
}
seckilltime()
let n = setInterval(seckilltime, 1000);

(function sliderGoods(){
    const goods = document.querySelector('.slider_goods')
    const next = document.querySelector('.slider .next')
    const prev = document.querySelector('.slider .prev')
    const imgwidth = document.querySelector('.slider_goods .goods').offsetWidth
    let num = 0
    next.addEventListener('click',function(){
        if(num == goods.children.length - 1){
            goods.style.left = 0
            num = 0
        }
        num++
        animate(goods,num * -imgwidth)
    })
    prev.addEventListener('click',function(){
        if(num == 0 ){
            num = goods.children.length - 1
            goods.style.left = num * imgwidth
        }
        num--
        animate(goods,num * -imgwidth)
    })
})();


(function tabNav() {
    const lis = document.querySelectorAll('.tab_nav li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            document.querySelector('.tab_nav .active').classList.remove('active');
            this.classList.add('active');
            document.querySelector('.recommend_goods .active').classList.remove('active')
            document.querySelector(`.recommend_goods .hidden:nth-child(${i + 1})`).classList.add('active')
        })
    }
})();

(function topTab() {
    const topTab = document.querySelector('.top_tab_nav')
    const tabNav = document.querySelector('.tab_nav')
    window.addEventListener('scroll', function () {
        const n = document.documentElement.scrollTop
        topTab.style.top = n >= (tabNav.offsetTop + 200) ? '52px' : '-70px'
    })
    const lis = document.querySelectorAll('.top_tab_nav1 li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            document.querySelector('.top_tab_nav1 .active').classList.remove('active');
            this.classList.add('active');
            document.querySelector('.recommend_goods .active').classList.remove('active')
            document.querySelector(`.recommend_goods .hidden:nth-child(${i + 1})`).classList.add('active')
            window.document.documentElement.scrollTop = tabNav.offsetTop - 50
        })
    }
})();