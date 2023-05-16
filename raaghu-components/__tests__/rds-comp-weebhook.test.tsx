import React from "react";
import RdsCompWebhookSubscription from "../src/rds-comp-webhook-subscriptions/rds-comp-webhook-subscriptions";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';



describe('RdsCompWebhookSubscription', () => {
    it('renders without errors', () => {
        render(<RdsCompWebhookSubscription />);
    });

    /*   test("should update the webhook event value when the textarea changes", () => {
          render(<RdsCompWebhookSubscription />);
  
          const webhookEventTextArea = screen.getByLabelText("Webhook Event") as HTMLInputElement;
          fireEvent.change(webhookEventTextArea, { target: { value: "example-event" } });
          expect(webhookEventTextArea.value).toBe("example-event");
      }); */

})