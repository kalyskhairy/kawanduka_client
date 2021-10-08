export default (ctx, inject) => {

  const convertCurrency = (amount, fraction = 0, currency = 'IDR') => {
    return new Intl.NumberFormat(['id'], {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol',
      minimumFractionDigits: fraction}
    ).format(amount);
  }

  const formatNumberCurrency = (amount, fraction = 0, type = 'id') => {
    return new Intl.NumberFormat([type], {
      minimumFractionDigits: fraction}
    ).format(amount);
  }

  const toLocalDate = (date, format = 'YYYY-MM-DD') => {
    return ctx.$moment(date, "YYYY-MM-DDTHH:mm:ss.SSSSZ", true).local().format(format);
  }

  const randomColor = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
  }

  const starCase = (text) => {
    return _.startCase(_.toLower(text));
  }

  const lowerCase = (text) => {
    return text.toLowerCase();
  }

  const isEmpty = (text) => {
    return _.isEmpty(text);
  }


  const helper = {
    convertCurrency,
    formatNumberCurrency,
    toLocalDate,
    randomColor,
    starCase,
    isEmpty,
    lowerCase
  }

  inject('helper', helper);

}
