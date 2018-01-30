module.exports = {
  /**
   * get url params
   */
  getUrlParams: function (search) {
    let urlParam = {};
    if (search.length > 1) {
      let params = search.substr(1, search.length - 1).split('&');
      params.forEach((item) => {
        let param = item.split('=');
        urlParam[param[0]] = param[1];
      });
    }
    return urlParam;
  },
  /**
   * get one param
   */
  findUrlParam: function (key) {
    let paramValue = this.getUrlParams(decodeURIComponent(window.location.search))[key];
    return paramValue === undefined ? null : paramValue;
  }
};
