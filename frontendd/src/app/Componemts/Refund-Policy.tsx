import Head from "next/head";

export default function ShippingCancellationRefundsPage() {
  return (
    <>
      <Head>
        <title>Shipping, Cancellation & Refunds</title>
        <meta name="description" content="Read our Shipping, Cancellation & Refunds policy." />
      </Head>

      <main className="p-10 max-w-3xl m-auto">
        <h1 className="text-4xl font-semibold mb-6">Shipping, Cancellation & Refunds</h1>

        <h2 className="text-2xl font-semibold mt-6">Shipping Policy</h2>
        <p className="mb-4">
          All services provided by [Company Name] are digital and do not require physical delivery.  
          Access to our platform and services is typically made available immediately upon confirmation of your payments.
        </p>

        <p className="mb-4">
          In cases where physical delivery is applicable (such as documents, certificates, or hardware components), 
          delivery will be made within 5-10 business days via a recognized delivery service.  
          Shipping timelines may vary due to delivery location, holidays, or other external factors.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cancellation Policy</h2>
        <p className="mb-4">
          You may cancel your service or order within 14 days of placing it, provided the service has not yet been rendered 
          or the delivery process has not been initiated. 
          To cancel your order, please email <a href="mailto:cancellations@example.com" className="text-blue-500">cancellations@example.com</a> 
          with your order number and a brief explanation for your cancellation.
        </p>

        <p className="mb-4">
          Once we process your cancellation, you will receive a confirmation email.  
          Please note that cancellations after service delivery or initiation may not be eligible for a full or partial refund.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Refund Policy</h2>
        <p className="mb-4">
          Refunds will be processed within 5-10 business days after your cancellation is approved.  
          The amount will be credited back to your original method of payment.
        </p>

        <p className="mb-4">
          Some services may be non-refundable due to their nature (such as custom software, digital media, or completed consultation sessions).
        </p>

        <h2 className="text-2xl font-semibold mt-6">Questions or Concerns</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Shipping, Cancellation, or Refund policy, please feel free to reach us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
        </p>

      </main>
    </>
  );
}
