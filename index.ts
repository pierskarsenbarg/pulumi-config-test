import * as pulumi from "@pulumi/pulumi";
import * as myconfig from "./config"

const config = new pulumi.Config();

export const configvalue = config.require("key");

export const myconfigfilevalue = myconfig.config.key