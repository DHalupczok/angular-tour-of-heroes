import { InjectionToken } from "@angular/core";
import { IReusableService } from "./IReusableService";
// Keep list of token, provider will give a implementation for each of them
export const SearchServiceTokens: Map<string, InjectionToken<IReusableService>> = new Map();
// Add File service implementation token
SearchServiceTokens.set("default", new InjectionToken<IReusableService>("default"));
SearchServiceTokens.set("reusableServiceC", new InjectionToken<IReusableService>("reusableServiceC"));
SearchServiceTokens.set("reusableServiceD", new InjectionToken<IReusableService>("reusableServiceD"));

