import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModelComponent } from "./modal.component";
import { ModalService } from "./services/modal.service";

@NgModule({
declarations:[ModelComponent],
imports: [CommonModule],
exports:[ModelComponent],
providers:[ModalService]
})
export class ModalModule {} 