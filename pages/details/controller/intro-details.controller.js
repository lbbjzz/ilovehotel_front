import '/styles/pages/details/intro-details.scss'
import {getIntroDetails} from "@/api/details/intro-details";
import ihHeader from "@/components/common/ihheader";

export default {
  name: "intro-details",
  data() {
    return {
      floorId: '',
      intro: {},
    }
  },

  components:{
    ihHeader
  },

  created() {
    this.floorId = this.$route.query.floorId
    this.getIntroDetailsM()
  },

  methods: {
    getIntroDetailsM() {
      getIntroDetails(this.floorId).then(res => {
       this.intro = res.data.data
      })
    }
  }
}
