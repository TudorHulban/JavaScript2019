Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

**Bitwise XOR	a ^ b**
Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.

| a | b |a XOR b|
|--| --|--|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|
