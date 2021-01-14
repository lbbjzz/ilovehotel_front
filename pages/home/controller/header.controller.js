import '@/styles/pages/home/header.scss'

export default {
  name: "header",
  data() {
    return {
      imgList: [
        {
          key: 1,
          url: require('@/assets/img/common.jpg')
        },
        {
          key: 2,
          url: require('@/assets/img/better.jpg')
        },
        {
          key: 3,
          url: require('@/assets/img/best.jpg')
        }
      ]
    }
  }
}
