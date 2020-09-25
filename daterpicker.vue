export default {
  data() {
    return {
      myDiagram:null,
      value1: '',
      scrollTarget: null,
      scrollCallback: null
    }
  },
  methods: {

  },
  mounted() {
      function setPosition(popper, reference) {
        popper.setAttribute('x-placement','bottom-start');
        popper.style.top = `${reference.getBoundingClientRect().top + window.pageYOffset + reference.getBoundingClientRect().height }px`
      }
      this.$watch(
        () => {
            return this.$refs.datePoint.pickerVisible
        },
        (val) => {
            const popper = this.$refs.datePoint.picker.$el  // 时间面板
            const reference = this.$refs.datePoint.$el    // 输入框
            
            function scrollCallback() {
                setPosition(popper, reference)
            }
            !this.scrollCallback && (this.scrollCallback = scrollCallback.bind(this))
            if (val) {
                this.scrollTarget = this.$refs.datePoint.popperJS.state.scrollTarget
                this.$refs.datePoint.popperJS._removeEventListeners()

                this.$refs.datePoint.picker.$nextTick(() => setPosition(popper, reference))

                this.scrollTarget.addEventListener('scroll', this.scrollCallback);
            } else {
                this.scrollTarget.removeEventListener('scroll', this.scrollCallback)
            }
        }
      )
  }
}
