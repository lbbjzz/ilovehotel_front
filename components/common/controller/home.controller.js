import '@/styles/pages/home/home.scss'


export default {
  name: "home",
  data() {
    return {
      imgList: [
        {
          key: 1,
          url: require('static/img/common.jpg'),
          link: 'www.baidu.com'
        },
        {
          key: 2,
          url: require('static/img/better.jpg'),
          link: 'www.google.com'
        },
        {
          key: 3,
          url: require('static/img/best.jpg'),
          link: 'www.yahoo.com'
        }
      ]
    }
  }
}
