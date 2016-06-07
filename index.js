module.exports = function(dt = new Date()) {
  if (typeof dt === 'string' || typeof dt === 'number' || dt === null || dt === undefined) {
    throw new Error('Invalid argument');
  }
  return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + '_' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
};