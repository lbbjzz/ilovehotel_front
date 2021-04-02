import '/styles/components/details/images.scss'
import images from "../images";

export default {
  props: ['imageList'],
  name: "images",
  data() {
    return {
      images: []
    }
  },
  watch: {
    imageList: {
      handler(val) {
        this.images = val
      },
      immediate: true,
      deep: true
    }
  },
  methods: {},
}
