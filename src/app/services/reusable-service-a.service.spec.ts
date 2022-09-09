import { TestBed } from "@angular/core/testing";

import { ReusableServiceAService } from "./reusable-service-a.service";

describe("ReausableServiceAService", () => {
  let service: ReusableServiceAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableServiceAService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
