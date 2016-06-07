const assert = require('power-assert');
const getter = require('../index.js');

describe('get_dt test', () => {
  it('Pattern of arguments expected A', () => {
    const dt = new Date();
    const result = getter(dt);
    assert(result !== undefined);
    assert(typeof result === 'string');
    assert(result === dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + '_' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds());
  });
  it('Pattern of arguments expected B', () => {
    const result = getter();
    const dt = new Date();
    assert(result !== undefined);
    assert(typeof result === 'string');
    assert(result === dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + '_' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds());
  });
  it('Pattern of not as expected arguments', () => {
    try { getter('hogehoge'); }
    catch(e) {
      assert(e.message === 'Invalid argument');
    }
  });
});