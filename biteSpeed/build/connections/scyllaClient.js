"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scyllaClient = void 0;
const cassandra_driver_1 = __importDefault(require("cassandra-driver"));
const local_1 = require("../settings/local");
const SCYLLA = {
    contactPoints: local_1.settings.SCYLLA.conatctPoints,
    localDataCenter: local_1.settings.SCYLLA.localDataCenter,
    queryOptions: { consistency: cassandra_driver_1.default.types.consistencies.localQuorum },
};
exports.scyllaClient = new cassandra_driver_1.default.Client(SCYLLA);
