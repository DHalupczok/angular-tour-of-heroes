import { InjectionToken } from "@angular/core";
import { IReusableService } from "./IReusableService";
// Keep list of token, provider will give a implementation for each of them
export const reusableServiceTokens: Map<string, InjectionToken<IReusableService>> = new Map();
// Add File service implementation token
reusableServiceTokens.set("default", new InjectionToken<IReusableService>("default"));
reusableServiceTokens.set("reusableServiceA", new InjectionToken<IReusableService>("reusableServiceA"));
reusableServiceTokens.set("reusableServiceB", new InjectionToken<IReusableService>("reusableServiceB"));
reusableServiceTokens.set("reusableServiceC", new InjectionToken<IReusableService>("reusableServiceC"));
reusableServiceTokens.set("reusableServiceD", new InjectionToken<IReusableService>("reusableServiceD"));

