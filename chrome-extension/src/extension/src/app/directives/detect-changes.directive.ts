import {ChangeDetectorRef, Directive, Input, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Directive({
  selector: '[detectChanges]'
})
export class DetectChangesDirective implements OnInit, OnDestroy {
  private subscription: Subscription;

  @Input('detectChanges') observable$: Observable<any>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.observable$.subscribe((() => {
      this.cd.detectChanges();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
