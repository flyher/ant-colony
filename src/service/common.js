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
  },
  /**
   * sort function
   */
  sortBy: function (attr, rev) {
    if (rev === undefined) {
      rev = 1;
    } else {
      rev = (rev) ? 1 : -1;
    }
    return function (a, b) {
      a = a[attr];
      b = b[attr];
      if (a < b) {
        return rev * -1;
      }
      if (a > b) {
        return rev * 1;
      }
      return 0;
    };
  }
};
