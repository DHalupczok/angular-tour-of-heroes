import { TestBed } from "@angular/core/testing";

import { ReusableServiceDefaultService } from "./reusable-service-default.service";

describe("ReausableServiceDefaultService", () => {
  let service: ReusableServiceDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableServiceDefaultService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
