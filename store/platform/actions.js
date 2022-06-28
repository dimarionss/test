export default {
  async checkAuth({
    commit,
    getters,
    dispatch
  }) {
    try {
      const requestDataSecond = {
        apiToken: this.$config.API_SECRET,
        accessToken: getters.GET_USER.accessToken,
        class: 6
      }
      const res = await this.$axios.$post('topics', requestDataSecond)
      if (res.succeed === true) {
      
      }
      return res
    } catch (e) {
      return e
    }
  },
}
