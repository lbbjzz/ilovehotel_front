import {getClass} from "@/api/home/hotel-class";

export default {
  name: "hotel-class",
  data() {
    return {
      currentDate: new Date(),
      floorList: [],
    };
  },
  created() {
    this.getClassM()
  },
  methods: {
    getClassM() {
      getClass().then(res => {
        this.floorList = res.data.data
      })
    }
  }
}
