import { pbkdf2, pbkdf2Sync } from "../../src/pbkdf2";
import { createTests } from "../test-vectors/pbkdf2";

createTests(pbkdf2Sync, pbkdf2);
