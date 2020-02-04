/**
 * @fileoverview The code size benchmark of binary kernel for accessing all
 * types setter and getter.
 */
goog.module('protobuf.benchmark.KernelCodeSizeBenchmarkAllTypes');

const ByteString = goog.require('protobuf.ByteString');
const Int64 = goog.require('protobuf.Int64');
const LazyAccessor = goog.require('protobuf.binary.LazyAccessor');
const TestMessage = goog.require('protobuf.testing.binary.TestMessage');
const {ensureCommonBaseLine} = goog.require('protobuf.benchmark.codeSize.codeSizeBase');

ensureCommonBaseLine();


/**
 * @return {string}
 */
function accessAllTypes() {
  const message = new TestMessage(LazyAccessor.createEmpty());

  message.addPackedBoolElement(1, true);
  message.addPackedBoolIterable(1, [true]);
  message.addUnpackedBoolElement(1, true);
  message.addUnpackedBoolIterable(1, [true]);
  message.addRepeatedBytesElement(1, ByteString.EMPTY);
  message.addRepeatedBytesIterable(1, [ByteString.EMPTY]);
  message.addPackedDoubleElement(1, 1.0);
  message.addPackedDoubleIterable(1, [1.0]);
  message.addUnpackedDoubleElement(1, 1.0);
  message.addUnpackedDoubleIterable(1, [1.0]);
  message.addPackedFixed32Element(1, 1);
  message.addPackedFixed32Iterable(1, [1]);
  message.addUnpackedFixed32Element(1, 1);
  message.addUnpackedFixed32Iterable(1, [1]);
  message.addPackedFixed64Element(1, Int64.fromBits(0, 1));
  message.addPackedFixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addUnpackedFixed64Element(1, Int64.fromBits(0, 1));
  message.addUnpackedFixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addPackedFloatElement(1, 1.0);
  message.addPackedFloatIterable(1, [1.0]);
  message.addUnpackedFloatElement(1, 1.0);
  message.addUnpackedFloatIterable(1, [1.0]);
  message.addPackedInt32Element(1, 1);
  message.addPackedInt32Iterable(1, [1]);
  message.addUnpackedInt32Element(1, 1);
  message.addUnpackedInt32Iterable(1, [1]);
  message.addPackedInt64Element(1, Int64.fromBits(0, 1));
  message.addPackedInt64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addUnpackedInt64Element(1, Int64.fromBits(0, 1));
  message.addUnpackedInt64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addRepeatedMessageElement(1, message, TestMessage.instanceCreator);
  message.addRepeatedMessageIterable(1, [message], TestMessage.instanceCreator);
  message.addPackedSfixed32Element(1, 1);
  message.addPackedSfixed32Iterable(1, [1]);
  message.addUnpackedSfixed32Element(1, 1);
  message.addUnpackedSfixed32Iterable(1, [1]);
  message.addPackedSfixed64Element(1, Int64.fromBits(0, 1));
  message.addPackedSfixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addUnpackedSfixed64Element(1, Int64.fromBits(0, 1));
  message.addUnpackedSfixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addPackedSint32Element(1, 1);
  message.addPackedSint32Iterable(1, [1]);
  message.addUnpackedSint32Element(1, 1);
  message.addUnpackedSint32Iterable(1, [1]);
  message.addPackedSint64Element(1, Int64.fromBits(0, 1));
  message.addPackedSint64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addUnpackedSint64Element(1, Int64.fromBits(0, 1));
  message.addUnpackedSint64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addRepeatedStringElement(1, '');
  message.addRepeatedStringIterable(1, ['']);
  message.addPackedUint32Element(1, 1);
  message.addPackedUint32Iterable(1, [1]);
  message.addUnpackedUint32Element(1, 1);
  message.addUnpackedUint32Iterable(1, [1]);
  message.addPackedUint64Element(1, Int64.fromBits(0, 1));
  message.addPackedUint64Iterable(1, [Int64.fromBits(0, 1)]);
  message.addUnpackedUint64Element(1, Int64.fromBits(0, 1));
  message.addUnpackedUint64Iterable(1, [Int64.fromBits(0, 1)]);

  message.setBool(1, true);
  message.setBytes(1, ByteString.EMPTY);
  message.setDouble(1, 1.0);
  message.setFixed32(1, 1);
  message.setFixed64(1, Int64.fromBits(0, 1));
  message.setFloat(1, 1.0);
  message.setInt32(1, 1);
  message.setInt64(1, Int64.fromBits(0, 1));
  message.setMessage(1, message);
  message.setSfixed32(1, 1);
  message.setSfixed64(1, Int64.fromBits(0, 1));
  message.setSint32(1, 1);
  message.setSint64(1, Int64.fromBits(0, 1));
  message.setString(1, 'abc');
  message.setUint32(1, 1);
  message.setUint64(1, Int64.fromBits(0, 1));
  message.setPackedBoolElement(1, 0, true);
  message.setPackedBoolIterable(1, [true]);
  message.setUnpackedBoolElement(1, 0, true);
  message.setUnpackedBoolIterable(1, [true]);
  message.setRepeatedBytesElement(1, 0, ByteString.EMPTY);
  message.setRepeatedBytesIterable(1, [ByteString.EMPTY]);
  message.setPackedDoubleElement(1, 0, 1.0);
  message.setPackedDoubleIterable(1, [1.0]);
  message.setUnpackedDoubleElement(1, 0, 1.0);
  message.setUnpackedDoubleIterable(1, [1.0]);
  message.setPackedFixed32Element(1, 0, 1);
  message.setPackedFixed32Iterable(1, [1]);
  message.setUnpackedFixed32Element(1, 0, 1);
  message.setUnpackedFixed32Iterable(1, [1]);
  message.setPackedFixed64Element(1, 0, Int64.fromBits(0, 1));
  message.setPackedFixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setUnpackedFixed64Element(1, 0, Int64.fromBits(0, 1));
  message.setUnpackedFixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setPackedFloatElement(1, 0, 1.0);
  message.setPackedFloatIterable(1, [1.0]);
  message.setUnpackedFloatElement(1, 0, 1.0);
  message.setUnpackedFloatIterable(1, [1.0]);
  message.setPackedInt32Element(1, 0, 1);
  message.setPackedInt32Iterable(1, [1]);
  message.setUnpackedInt32Element(1, 0, 1);
  message.setUnpackedInt32Iterable(1, [1]);
  message.setPackedInt64Element(1, 0, Int64.fromBits(0, 1));
  message.setPackedInt64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setUnpackedInt64Element(1, 0, Int64.fromBits(0, 1));
  message.setUnpackedInt64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setRepeatedMessageElement(1, message, TestMessage.instanceCreator, 0);
  message.setRepeatedMessageIterable(1, [message]);
  message.setPackedSfixed32Element(1, 0, 1);
  message.setPackedSfixed32Iterable(1, [1]);
  message.setUnpackedSfixed32Element(1, 0, 1);
  message.setUnpackedSfixed32Iterable(1, [1]);
  message.setPackedSfixed64Element(1, 0, Int64.fromBits(0, 1));
  message.setPackedSfixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setUnpackedSfixed64Element(1, 0, Int64.fromBits(0, 1));
  message.setUnpackedSfixed64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setRepeatedStringElement(1, 0, '');
  message.setRepeatedStringIterable(1, ['']);
  message.setPackedSint32Element(1, 0, 1);
  message.setPackedSint32Iterable(1, [1]);
  message.setUnpackedSint32Element(1, 0, 1);
  message.setUnpackedSint32Iterable(1, [1]);
  message.setPackedSint64Element(1, 0, Int64.fromBits(0, 1));
  message.setPackedSint64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setUnpackedSint64Element(1, 0, Int64.fromBits(0, 1));
  message.setUnpackedSint64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setPackedUint32Element(1, 0, 1);
  message.setPackedUint32Iterable(1, [1]);
  message.setUnpackedUint32Element(1, 0, 1);
  message.setUnpackedUint32Iterable(1, [1]);
  message.setPackedUint64Element(1, 0, Int64.fromBits(0, 1));
  message.setPackedUint64Iterable(1, [Int64.fromBits(0, 1)]);
  message.setUnpackedUint64Element(1, 0, Int64.fromBits(0, 1));
  message.setUnpackedUint64Iterable(1, [Int64.fromBits(0, 1)]);

  let s = '';
  s += message.getBoolWithDefault(1);
  s += message.getBytesWithDefault(1);
  s += message.getDoubleWithDefault(1);
  s += message.getFixed32WithDefault(1);
  s += message.getFixed64WithDefault(1);
  s += message.getFloatWithDefault(1);
  s += message.getInt32WithDefault(1);
  s += message.getInt64WithDefault(1);
  s += message.getMessage(1, TestMessage.instanceCreator);
  s += message.getSfixed32WithDefault(1);
  s += message.getSfixed64WithDefault(1);
  s += message.getSint32WithDefault(1);
  s += message.getSint64WithDefault(1);
  s += message.getStringWithDefault(1);
  s += message.getUint32WithDefault(1);
  s += message.getUint64WithDefault(1);
  s += message.getRepeatedBoolElement(1, 0);
  s += message.getRepeatedBoolIterable(1);
  s += message.getRepeatedBoolSize(1);
  s += message.getRepeatedBytesElement(1, 0);
  s += message.getRepeatedBytesIterable(1);
  s += message.getRepeatedBytesSize(1);
  s += message.getRepeatedDoubleElement(1, 0);
  s += message.getRepeatedDoubleIterable(1);
  s += message.getRepeatedDoubleSize(1);
  s += message.getRepeatedFixed32Element(1, 0);
  s += message.getRepeatedFixed32Iterable(1);
  s += message.getRepeatedFixed32Size(1);
  s += message.getRepeatedFixed64Element(1, 0);
  s += message.getRepeatedFixed64Iterable(1);
  s += message.getRepeatedFixed64Size(1);
  s += message.getRepeatedFloatElement(1, 0);
  s += message.getRepeatedFloatIterable(1);
  s += message.getRepeatedFloatSize(1);
  s += message.getRepeatedInt32Element(1, 0);
  s += message.getRepeatedInt32Iterable(1);
  s += message.getRepeatedInt32Size(1);
  s += message.getRepeatedInt64Element(1, 0);
  s += message.getRepeatedInt64Iterable(1);
  s += message.getRepeatedInt64Size(1);
  s += message.getRepeatedMessageElement(1, TestMessage.instanceCreator, 0);
  s += message.getRepeatedMessageIterable(1, TestMessage.instanceCreator);
  s += message.getRepeatedMessageSize(1, TestMessage.instanceCreator);
  s += message.getRepeatedSfixed32Element(1, 0);
  s += message.getRepeatedSfixed32Iterable(1);
  s += message.getRepeatedSfixed32Size(1);
  s += message.getRepeatedSfixed64Element(1, 0);
  s += message.getRepeatedSfixed64Iterable(1);
  s += message.getRepeatedSfixed64Size(1);
  s += message.getRepeatedSint32Element(1, 0);
  s += message.getRepeatedSint32Iterable(1);
  s += message.getRepeatedSint32Size(1);
  s += message.getRepeatedSint64Element(1, 0);
  s += message.getRepeatedSint64Iterable(1);
  s += message.getRepeatedSint64Size(1);
  s += message.getRepeatedStringElement(1, 0);
  s += message.getRepeatedStringIterable(1);
  s += message.getRepeatedStringSize(1);
  s += message.getRepeatedUint32Element(1, 0);
  s += message.getRepeatedUint32Iterable(1);
  s += message.getRepeatedUint32Size(1);
  s += message.getRepeatedUint64Element(1, 0);
  s += message.getRepeatedUint64Iterable(1);
  s += message.getRepeatedUint64Size(1);

  s += message.serialize();

  return s;
}

goog.global['__hiddenTest'] += accessAllTypes();
