import { TestBed } from "@angular/core/testing";

import { ReausableServiceBService } from "./reusable-service-b.service";

describe("ReausableServiceBService", () => {
  let service: ReausableServiceBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReausableServiceBService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
