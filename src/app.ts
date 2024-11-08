import { Global, Injectable, Module, OnModuleInit } from "@nestjs/common";

@Injectable()
export class BService implements OnModuleInit {
  public initialized = false;

  onModuleInit() {
    this.initialized = true;
  }
}

@Global()
@Module({
  providers: [BService],
  exports: [BService],
})
export class BModule {}

@Injectable()
export class AService implements OnModuleInit {
  constructor(private bService: BService) {}

  onModuleInit() {
    if (!this.bService.initialized) {
      throw new Error('BService not initialized before AService');
    }
  }
}

@Module({
  providers: [AService],
  exports: [AService]
})
export class AModule {}

@Module({
  imports: [AModule, BModule],
})
export class AppModule {}

