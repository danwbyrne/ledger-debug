import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";

describe(`NodeHid Transport`, () => {
  test(`Transport Has Paths`, async () => {
    const paths = await TransportNodeHid.list();
    console.log(`${paths.length} paths: ${paths}`);

    expect(paths).toBeDefined();
    expect(paths.length).toBeGreaterThan(0);
  });
});
