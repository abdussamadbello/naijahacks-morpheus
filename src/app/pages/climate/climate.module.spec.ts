import { ClimateModule } from './climate.module';

describe('ClimateModule', () => {
  let climateModule: ClimateModule;

  beforeEach(() => {
    climateModule = new ClimateModule();
  });

  it('should create an instance', () => {
    expect(climateModule).toBeTruthy();
  });
});
