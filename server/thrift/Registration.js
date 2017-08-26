//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var DAVUser_ttypes = require('./DAVUser_types');
var Vehicle_ttypes = require('./Vehicle_types');


var ttypes = require('./Registration_types');
//HELPER FUNCTIONS AND STRUCTURES

var Registration_register_vehicle_args = function(args) {
  this.vehicleDetails = null;
  if (args) {
    if (args.vehicleDetails !== undefined && args.vehicleDetails !== null) {
      this.vehicleDetails = new Vehicle_ttypes.VehicleDetails(args.vehicleDetails);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field vehicleDetails is unset!');
    }
  }
};
Registration_register_vehicle_args.prototype = {};
Registration_register_vehicle_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.vehicleDetails = new Vehicle_ttypes.VehicleDetails();
        this.vehicleDetails.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Registration_register_vehicle_args.prototype.write = function(output) {
  output.writeStructBegin('Registration_register_vehicle_args');
  if (this.vehicleDetails !== null && this.vehicleDetails !== undefined) {
    output.writeFieldBegin('vehicleDetails', Thrift.Type.STRUCT, 1);
    this.vehicleDetails.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Registration_register_vehicle_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
Registration_register_vehicle_result.prototype = {};
Registration_register_vehicle_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Registration_register_vehicle_result.prototype.write = function(output) {
  output.writeStructBegin('Registration_register_vehicle_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Registration_deregister_vehicle_args = function(args) {
  this.vehicleID = null;
  if (args) {
    if (args.vehicleID !== undefined && args.vehicleID !== null) {
      this.vehicleID = new DAVUser_ttypes.DAVUser(args.vehicleID);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field vehicleID is unset!');
    }
  }
};
Registration_deregister_vehicle_args.prototype = {};
Registration_deregister_vehicle_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.vehicleID = new DAVUser_ttypes.DAVUser();
        this.vehicleID.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Registration_deregister_vehicle_args.prototype.write = function(output) {
  output.writeStructBegin('Registration_deregister_vehicle_args');
  if (this.vehicleID !== null && this.vehicleID !== undefined) {
    output.writeFieldBegin('vehicleID', Thrift.Type.STRUCT, 1);
    this.vehicleID.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Registration_deregister_vehicle_result = function(args) {
};
Registration_deregister_vehicle_result.prototype = {};
Registration_deregister_vehicle_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Registration_deregister_vehicle_result.prototype.write = function(output) {
  output.writeStructBegin('Registration_deregister_vehicle_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Registration_vehicle_is_registered_args = function(args) {
  this.vehicleID = null;
  if (args) {
    if (args.vehicleID !== undefined && args.vehicleID !== null) {
      this.vehicleID = new DAVUser_ttypes.DAVUser(args.vehicleID);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field vehicleID is unset!');
    }
  }
};
Registration_vehicle_is_registered_args.prototype = {};
Registration_vehicle_is_registered_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.vehicleID = new DAVUser_ttypes.DAVUser();
        this.vehicleID.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Registration_vehicle_is_registered_args.prototype.write = function(output) {
  output.writeStructBegin('Registration_vehicle_is_registered_args');
  if (this.vehicleID !== null && this.vehicleID !== undefined) {
    output.writeFieldBegin('vehicleID', Thrift.Type.STRUCT, 1);
    this.vehicleID.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Registration_vehicle_is_registered_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
Registration_vehicle_is_registered_result.prototype = {};
Registration_vehicle_is_registered_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Registration_vehicle_is_registered_result.prototype.write = function(output) {
  output.writeStructBegin('Registration_vehicle_is_registered_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RegistrationClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
RegistrationClient.prototype = {};
RegistrationClient.prototype.seqid = function() { return this._seqid; };
RegistrationClient.prototype.new_seqid = function() { return this._seqid += 1; };
RegistrationClient.prototype.register_vehicle = function(vehicleDetails, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_register_vehicle(vehicleDetails);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_register_vehicle(vehicleDetails);
  }
};

RegistrationClient.prototype.send_register_vehicle = function(vehicleDetails) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('register_vehicle', Thrift.MessageType.CALL, this.seqid());
  var args = new Registration_register_vehicle_args();
  args.vehicleDetails = vehicleDetails;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

RegistrationClient.prototype.recv_register_vehicle = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Registration_register_vehicle_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('register_vehicle failed: unknown result');
};
RegistrationClient.prototype.deregister_vehicle = function(vehicleID, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deregister_vehicle(vehicleID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deregister_vehicle(vehicleID);
  }
};

RegistrationClient.prototype.send_deregister_vehicle = function(vehicleID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deregister_vehicle', Thrift.MessageType.CALL, this.seqid());
  var args = new Registration_deregister_vehicle_args();
  args.vehicleID = vehicleID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

RegistrationClient.prototype.recv_deregister_vehicle = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Registration_deregister_vehicle_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
RegistrationClient.prototype.vehicle_is_registered = function(vehicleID, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_vehicle_is_registered(vehicleID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_vehicle_is_registered(vehicleID);
  }
};

RegistrationClient.prototype.send_vehicle_is_registered = function(vehicleID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('vehicle_is_registered', Thrift.MessageType.CALL, this.seqid());
  var args = new Registration_vehicle_is_registered_args();
  args.vehicleID = vehicleID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

RegistrationClient.prototype.recv_vehicle_is_registered = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Registration_vehicle_is_registered_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('vehicle_is_registered failed: unknown result');
};
var RegistrationProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
RegistrationProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
RegistrationProcessor.prototype.process_register_vehicle = function(seqid, input, output) {
  var args = new Registration_register_vehicle_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.register_vehicle.length === 1) {
    Q.fcall(this._handler.register_vehicle, args.vehicleDetails)
      .then(function(result) {
        var result_obj = new Registration_register_vehicle_result({success: result});
        output.writeMessageBegin("register_vehicle", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("register_vehicle", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.register_vehicle(args.vehicleDetails, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Registration_register_vehicle_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("register_vehicle", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("register_vehicle", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
RegistrationProcessor.prototype.process_deregister_vehicle = function(seqid, input, output) {
  var args = new Registration_deregister_vehicle_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deregister_vehicle.length === 1) {
    Q.fcall(this._handler.deregister_vehicle, args.vehicleID)
      .then(function(result) {
        var result_obj = new Registration_deregister_vehicle_result({success: result});
        output.writeMessageBegin("deregister_vehicle", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("deregister_vehicle", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deregister_vehicle(args.vehicleID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Registration_deregister_vehicle_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("deregister_vehicle", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("deregister_vehicle", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
RegistrationProcessor.prototype.process_vehicle_is_registered = function(seqid, input, output) {
  var args = new Registration_vehicle_is_registered_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.vehicle_is_registered.length === 1) {
    Q.fcall(this._handler.vehicle_is_registered, args.vehicleID)
      .then(function(result) {
        var result_obj = new Registration_vehicle_is_registered_result({success: result});
        output.writeMessageBegin("vehicle_is_registered", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("vehicle_is_registered", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.vehicle_is_registered(args.vehicleID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Registration_vehicle_is_registered_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("vehicle_is_registered", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("vehicle_is_registered", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
