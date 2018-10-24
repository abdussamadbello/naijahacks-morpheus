import { FarmdashboardModule } from './farmdashboard.module';

describe('FarmdashboardModule', () => {
  let farmdashboardModule: FarmdashboardModule;

  beforeEach(() => {
    farmdashboardModule = new FarmdashboardModule();
  });

  it('should create an instance', () => {
    expect(farmdashboardModule).toBeTruthy();
  });
});
