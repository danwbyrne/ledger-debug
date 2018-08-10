import TransportU2F from "@ledgerhq/hw-transport-u2f";

describe(`U2F Transport`, () => {
  test(`Transport Has A Connection`, async () => {
    const paths = await TransportU2F.list();
    console.log(`${paths.length} paths: ${paths}`);

    expect(paths).toBeDefined();
    expect(paths.length).toBeGreaterThan(0);
  });
});
