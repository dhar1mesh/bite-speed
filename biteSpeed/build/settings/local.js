"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = void 0;
const cassandra_driver_1 = __importDefault(require("cassandra-driver"));
exports.settings = {
    SCYLLA: {
        conatctPoints: ["127.0.0.1"],
        localDataCenter: "datacenter1",
        consistency: cassandra_driver_1.default.types.consistencies.any,
        localHost: '1',
        remoteHost: '1'
    },
    REPLICATION_STRATEGY: "SimpleStrategy",
    REPLICATION_FACTOR: 1,
    KEYSPACE: "bitespeed_keyspace",
    TABLE_NAME: "identify"
};
