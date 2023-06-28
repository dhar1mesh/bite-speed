import cassandra from "cassandra-driver"

export const settings={
    SCYLLA:{
        conatctPoints:["127.0.0.1"],
        localDataCenter:"datacenter1",
        consistency:cassandra.types.consistencies.any,
        localHost:'1',
        remoteHost:'1'
    },
    REPLICATION_STRATEGY: "SimpleStrategy",
    REPLICATION_FACTOR:1,
    KEYSPACE:"bitespeed_keyspace",
    TABLE_NAME:"identify"
}