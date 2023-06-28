import  cassandra from "cassandra-driver";
import { settings } from "../settings/local";


const SCYLLA: cassandra.DseClientOptions = {
	contactPoints: settings.SCYLLA.conatctPoints,
	localDataCenter:settings.SCYLLA.localDataCenter,
		queryOptions: { consistency: cassandra.types.consistencies.localQuorum },
};
export const scyllaClient = new cassandra.Client(SCYLLA);