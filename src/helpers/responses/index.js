// export let _listResponse = {
//     _codeState : 0,
//     _list:[],
//     message:'mensaje de error',
//     status:false
// }

export function _listResponse (_codeState = 0,_list = [],_message = 'mensaje de error',_status = false){

    this._codeState = _codeState;
    this._list = _list;
    this._message = _message;
    this._status = _status;

}

export function _getResponse(_codeState = 0, _obj = {}, _message = 'mensaje de error', _status = false, _classesCourse = []){


    this._codeState = _codeState;
    this._obj = _obj;
    this._message = _message;
    this._status = _status;
    this._classesCourse = _classesCourse;

}