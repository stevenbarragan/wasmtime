initSidebarItems({"static":[["ADC","Add with carry flag r{16,32,64} to r/m of the same size."],["ADD","Add r{16,32,64} to r/m of the same size."],["ADDPD","Add packed double-precision floating-point values from xmm2/mem to xmm1 and store result in xmm1 (SSE2)."],["ADDPS","Add packed single-precision floating-point values from xmm2/mem to xmm1 and store result in xmm1 (SSE)."],["ADDSD","Add the low double-precision floating-point value from xmm2/mem to xmm1 and store the result in xmm1."],["ADDSS","Add the low single-precision floating-point value from xmm2/mem to xmm1 and store the result in xmm1."],["ADD_IMM","Add imm{16,32} to r/m{16,32,64}, possibly sign-extended."],["ADD_IMM8_SIGN_EXTEND","Add sign-extended imm8 to r/m{16,32,64}."],["AND","r/m{16,32,64} AND register of the same size (Intel docs have a typo)."],["ANDNPS","Return the bitwise logical AND NOT of packed single-precision floating-point values in xmm1 and xmm2/mem."],["ANDPS","Return the bitwise logical AND of packed single-precision floating-point values in xmm1 and xmm2/mem."],["AND_IMM","imm{16,32} AND r/m{16,32,64}, possibly sign-extended."],["AND_IMM8_SIGN_EXTEND","r/m{16,32,64} AND sign-extended imm8."],["BIT_SCAN_FORWARD","Bit scan forward (stores index of first encountered 1 from the front)."],["BIT_SCAN_REVERSE","Bit scan reverse (stores index of first encountered 1 from the back)."],["BLENDVPD","Select packed double-precision floating-point values from xmm1 and xmm2/m128 from mask specified in XMM0 and store the values into xmm1 (SSE4.1)."],["BLENDVPS","Select packed single-precision floating-point values from xmm1 and xmm2/m128 from mask specified in XMM0 and store the values into xmm1 (SSE4.1)."],["CALL_RELATIVE","Call near, relative, displacement relative to next instruction (sign-extended)."],["CMOV_OVERFLOW","Move r/m{16,32,64} if overflow (OF=1)."],["CMPPD","Compare packed double-precision floating-point value in xmm2/m32 and xmm1 using bits 2:0 of imm8 as comparison predicate (SSE2)."],["CMPPS","Compare packed single-precision floating-point value in xmm2/m32 and xmm1 using bits 2:0 of imm8 as comparison predicate (SSE)."],["CMP_IMM","Compare imm{16,32} with r/m{16,32,64} (sign-extended if 64)."],["CMP_IMM8","Compare imm8 with r/m{16,32,64}."],["CMP_REG","Compare r{16,32,64} with r/m of the same size."],["CVTDQ2PS","Convert four packed signed doubleword integers from xmm2/mem to four packed single-precision floating-point values in xmm1 (SSE2)."],["CVTSD2SS","Convert scalar double-precision floating-point value to scalar single-precision floating-point value."],["CVTSI2SD","Convert doubleword integer to scalar double-precision floating-point value."],["CVTSI2SS","Convert doubleword integer to scalar single-precision floating-point value."],["CVTSS2SD","Convert scalar single-precision floating-point value to scalar double-precision float-point value."],["CVTTPS2DQ","Convert four packed single-precision floating-point values from xmm2/mem to four packed signed doubleword values in xmm1 using truncation (SSE2)."],["CVTTSD2SI","Convert with truncation scalar double-precision floating-point value to signed integer."],["CVTTSS2SI","Convert with truncation scalar single-precision floating-point value to integer."],["DIV","Unsigned divide for {16,32,64}-bit."],["DIVPD","Divide packed double-precision floating-point values in xmm1 by packed double-precision floating-point values in xmm2/mem (SSE2)."],["DIVPS","Divide packed single-precision floating-point values in xmm1 by packed single-precision floating-point values in xmm2/mem (SSE)."],["DIVSD","Divide low double-precision floating-point value in xmm1 by low double-precision floating-point value in xmm2/m64."],["DIVSS","Divide low single-precision floating-point value in xmm1 by low single-precision floating-point value in xmm2/m32."],["EMPTY","Empty opcode for use as a default."],["IDIV","Signed divide for {16,32,64}-bit."],["IMUL","Signed multiply for {16,32,64}-bit, generic registers."],["IMUL_RDX_RAX","Signed multiply for {16,32,64}-bit, storing into RDX:RAX."],["INSERTPS","Insert scalar single-precision floating-point value."],["JUMP_ABSOLUTE","Either:"],["JUMP_NEAR_IF_OVERFLOW","Jump near (rel32) if overflow (OF=1)."],["JUMP_NEAR_RELATIVE","Jump near, relative, RIP = RIP + 32-bit displacement sign extended to 64 bits."],["JUMP_SHORT","Jump short, relative, RIP = RIP + 8-bit displacement sign extended to 64 bits."],["JUMP_SHORT_IF_EQUAL","Jump short (rel8) if equal (ZF=1)."],["JUMP_SHORT_IF_NOT_EQUAL","Jump short (rel8) if not equal (ZF=0)."],["JUMP_SHORT_IF_OVERFLOW","Jump short (rel8) if overflow (OF=1)."],["LEA","Store effective address for m in register r{16,32,64}."],["LZCNT","Count the number of leading zero bits."],["MAXPD","Return the maximum packed double-precision floating-point values between xmm1 and xmm2/m128 (SSE2)."],["MAXPS","Return the maximum packed single-precision floating-point values between  xmm1 and xmm2/m128 (SSE)."],["MAXSD","Return the maximum scalar double-precision floating-point value between xmm2/m64 and xmm1."],["MAXSS","Return the maximum scalar single-precision floating-point value between xmm2/m32 and xmm1."],["MINPD","Return the minimum packed double-precision floating-point values between xmm1 and xmm2/m128 (SSE2)."],["MINPS","Return the minimum packed single-precision floating-point values between xmm1 and xmm2/m128 (SSE)."],["MINSD","Return the minimum scalar double-precision floating-point value between xmm2/m64 and xmm1."],["MINSS","Return the minimum scalar single-precision floating-point value between xmm2/m32 and xmm1."],["MOVAPS_LOAD","Move aligned packed single-precision floating-point values from x/m to xmm (SSE)."],["MOVD_LOAD_XMM","Move doubleword from r/m32 to xmm (SSE2). Quadword with REX prefix."],["MOVD_STORE_XMM","Move doubleword from xmm to r/m32 (SSE2). Quadword with REX prefix."],["MOVLHPS","Move packed single-precision floating-point values low to high (SSE)."],["MOVSD_LOAD","Move scalar double-precision floating-point value (from reg/mem to reg)."],["MOVSD_STORE","Move scalar double-precision floating-point value (from reg to reg/mem)."],["MOVSS_LOAD","Move scalar single-precision floating-point-value (from reg/mem to reg)."],["MOVSS_STORE","Move scalar single-precision floating-point value (from reg to reg/mem)."],["MOVSXD","Move doubleword to register with sign-extension."],["MOVSX_BYTE","Move byte to register with sign-extension."],["MOVSX_WORD","Move word to register with sign-extension."],["MOVUPS_LOAD","Move unaligned packed single-precision floating-point from x/m to xmm (SSE)."],["MOVUPS_STORE","Move unaligned packed single-precision floating-point value from xmm to x/m (SSE)."],["MOVZX_BYTE","Move byte to register with zero-extension."],["MOVZX_WORD","Move word to register with zero-extension."],["MOV_BYTE_STORE","Move r8 to r/m8."],["MOV_IMM","Move imm{16,32,64} to same-sized register."],["MOV_IMM_SIGNEXTEND","Move imm{16,32} to r{16,32,64}, sign-extended if 64-bit target."],["MOV_LOAD","Move {r/m16, r/m32, r/m64} to same-sized register."],["MOV_STORE","Move {r16, r32, r64} to same-sized register or memory."],["MOV_STORE_16","Move r16 to r/m16."],["MUL","Unsigned multiply for {16,32,64}-bit."],["MULPD","Multiply packed double-precision floating-point values from xmm2/mem to xmm1 and store result in xmm1 (SSE2)."],["MULPS","Multiply packed single-precision floating-point values from xmm2/mem to xmm1 and store result in xmm1 (SSE)."],["MULSD","Multiply the low double-precision floating-point value in xmm2/m64 by the low double-precision floating-point value in xmm1."],["MULSS","Multiply the low single-precision floating-point value in xmm2/m32 by the low single-precision floating-point value in xmm1."],["NOT","Reverse each bit of r/m{16,32,64}."],["OR","r{16,32,64} OR register of same size."],["ORPS","Return the bitwise logical OR of packed single-precision values in xmm and x/m (SSE)."],["OR_IMM","imm{16,32} OR r/m{16,32,64}, possibly sign-extended."],["OR_IMM8_SIGN_EXTEND","r/m{16,32,64} OR sign-extended imm8."],["PABSB","Compute the absolute value of bytes in xmm2/m128 and store the unsigned result in xmm1 (SSSE3)."],["PABSD","Compute the absolute value of 32-bit integers in xmm2/m128 and store the unsigned result in xmm1 (SSSE3)."],["PABSW","Compute the absolute value of 16-bit integers in xmm2/m128 and store the unsigned result in xmm1 (SSSE3)."],["PACKSSDW","Converts 4 packed signed doubleword integers from xmm1 and from xmm2/m128 into 8 packed signed word integers in xmm1 using signed saturation (SSE2)."],["PACKSSWB","Converts 8 packed signed word integers from xmm1 and from xmm2/m128 into 16 packed signed byte integers in xmm1 using signed saturation (SSE2)."],["PACKUSDW","Converts 4 packed signed doubleword integers from xmm1 and from xmm2/m128 into 8 unpacked signed word integers in xmm1 using unsigned saturation (SSE4.1)."],["PACKUSWB","Converts 8 packed signed word integers from xmm1 and from xmm2/m128 into 16 packed unsigned byte integers in xmm1 using unsigned saturation (SSE2)."],["PADDB","Add packed byte integers from xmm2/m128 and xmm1 (SSE2)."],["PADDD","Add packed doubleword integers from xmm2/m128 and xmm1 (SSE2)."],["PADDQ","Add packed quadword integers from xmm2/m128 and xmm1 (SSE2)."],["PADDSB","Add packed signed byte integers from xmm2/m128 and xmm1 saturate the results (SSE)."],["PADDSW","Add packed signed word integers from xmm2/m128 and xmm1 saturate the results (SSE)."],["PADDUSB","Add packed unsigned byte integers from xmm2/m128 and xmm1 saturate the results (SSE)."],["PADDUSW","Add packed unsigned word integers from xmm2/m128 and xmm1 saturate the results (SSE)."],["PADDW","Add packed word integers from xmm2/m128 and xmm1 (SSE2)."],["PALIGNR","Concatenate destination and source operands, extract a byte-aligned result into xmm1 that is shifted to the right by the constant number of bytes in imm8 (SSSE3)."],["PAND","Bitwise AND of xmm2/m128 and xmm1 (SSE2)."],["PANDN","Bitwise AND NOT of xmm2/m128 and xmm1 (SSE2)."],["PAVGB","Average packed unsigned byte integers from xmm2/m128 and xmm1 with rounding (SSE2)."],["PAVGW","Average packed unsigned word integers from xmm2/m128 and xmm1 with rounding (SSE2)."],["PBLENDVB","Select byte values from xmm1 and xmm2/m128 from mask specified in the high bit of each byte in XMM0 and store the values into xmm1 (SSE4.1)."],["PBLENDW","Select words from xmm1 and xmm2/m128 from mask specified in imm8 and store the values into xmm1 (SSE4.1)."],["PCMPEQB","Compare packed data for equal (SSE2)."],["PCMPEQD","Compare packed data for equal (SSE2)."],["PCMPEQQ","Compare packed data for equal (SSE4.1)."],["PCMPEQW","Compare packed data for equal (SSE2)."],["PCMPGTB","Compare packed signed byte integers for greater than (SSE2)."],["PCMPGTD","Compare packed signed doubleword integers for greater than (SSE2)."],["PCMPGTQ","Compare packed signed quadword integers for greater than (SSE4.2)."],["PCMPGTW","Compare packed signed word integers for greater than (SSE2)."],["PEXTR","Extract doubleword or quadword, depending on REX.W (SSE4.1)."],["PEXTRB","Extract byte (SSE4.1)."],["PEXTRW","Extract word (SSE4.1). There is a 3-byte SSE2 variant that can also move to m/16."],["PINSR","Insert doubleword or quadword, depending on REX.W (SSE4.1)."],["PINSRB","Insert byte (SSE4.1)."],["PINSRW","Insert word (SSE2)."],["PMAXSB","Compare packed signed byte integers in xmm1 and xmm2/m128 and store packed maximum values in xmm1 (SSE4.1)."],["PMAXSD","Compare packed signed doubleword integers in xmm1 and xmm2/m128 and store packed maximum values in xmm1 (SSE4.1)."],["PMAXSW","Compare packed signed word integers in xmm1 and xmm2/m128 and store packed maximum values in xmm1 (SSE2)."],["PMAXUB","Compare packed unsigned byte integers in xmm1 and xmm2/m128 and store packed maximum values in xmm1 (SSE2)."],["PMAXUD","Compare packed unsigned doubleword integers in xmm1 and xmm2/m128 and store packed maximum values in xmm1 (SSE4.1)."],["PMAXUW","Compare packed unsigned word integers in xmm1 and xmm2/m128 and store packed maximum values in xmm1 (SSE4.1)."],["PMINSB","Compare packed signed byte integers in xmm1 and xmm2/m128 and store packed minimum values in xmm1 (SSE4.1)."],["PMINSD","Compare packed signed doubleword integers in xmm1 and xmm2/m128 and store packed minimum values in xmm1 (SSE4.1)."],["PMINSW","Compare packed signed word integers in xmm1 and xmm2/m128 and store packed minimum values in xmm1 (SSE2)."],["PMINUB","Compare packed unsigned byte integers in xmm1 and xmm2/m128 and store packed minimum values in xmm1 (SSE2)."],["PMINUD","Compare packed unsigned doubleword integers in xmm1 and xmm2/m128 and store packed minimum values in xmm1 (SSE4.1)."],["PMINUW","Compare packed unsigned word integers in xmm1 and xmm2/m128 and store packed minimum values in xmm1 (SSE4.1)."],["PMOVSXBW","Sign extend 8 packed 8-bit integers in the low 8 bytes of xmm2/m64 to 8 packed 16-bit integers in xmm1 (SSE4.1)."],["PMOVSXDQ","Sign extend 2 packed 32-bit integers in the low 8 bytes of xmm2/m64 to 2 packed 64-bit integers in xmm1 (SSE4.1)."],["PMOVSXWD","Sign extend 4 packed 16-bit integers in the low 8 bytes of xmm2/m64 to 4 packed 32-bit integers in xmm1 (SSE4.1)."],["PMOVZXBW","Zero extend 8 packed 8-bit integers in the low 8 bytes of xmm2/m64 to 8 packed 16-bit integers in xmm1 (SSE4.1)."],["PMOVZXDQ","Zero extend 2 packed 32-bit integers in the low 8 bytes of xmm2/m64 to 2 packed 64-bit integers in xmm1 (SSE4.1)."],["PMOVZXWD","Zero extend 4 packed 16-bit integers in the low 8 bytes of xmm2/m64 to 4 packed 32-bit integers in xmm1 (SSE4.1)."],["PMULLD","Multiply the packed doubleword signed integers in xmm1 and xmm2/m128 and store the low 32 bits of each product in xmm1 (SSE4.1)."],["PMULLW","Multiply the packed signed word integers in xmm1 and xmm2/m128, and store the low 16 bits of the results in xmm1 (SSE2)."],["PMULUDQ","Multiply packed unsigned doubleword integers in xmm1 by packed unsigned doubleword integers in xmm2/m128, and store the quadword results in xmm1 (SSE2)."],["POPCNT","Returns the count of number of bits set to 1."],["POP_REG","Pop top of stack into r{16,32,64}; increment stack pointer."],["POR","Bitwise OR of xmm2/m128 and xmm1 (SSE2)."],["PSHUFB","Shuffle bytes in xmm1 according to contents of xmm2/m128 (SSE3)."],["PSHUFD","Shuffle the doublewords in xmm2/m128 based on the encoding in imm8 and store the result in xmm1 (SSE2)."],["PSLLD","Shift doublewords in xmm1 left by xmm2/m128 while shifting in 0s (SSE2)."],["PSLLQ","Shift quadwords in xmm1 left by xmm2/m128 while shifting in 0s (SSE2)."],["PSLLW","Shift words in xmm1 left by xmm2/m128 while shifting in 0s (SSE2)."],["PSRAD","Shift doublewords in xmm1 right by xmm2/m128 while shifting in sign bits (SSE2)."],["PSRAW","Shift words in xmm1 right by xmm2/m128 while shifting in sign bits (SSE2)."],["PSRLD","Shift doublewords in xmm1 right by xmm2/m128 while shifting in 0s (SSE2)."],["PSRLQ","Shift quadwords in xmm1 right by xmm2/m128 while shifting in 0s (SSE2)."],["PSRLW","Shift words in xmm1 right by xmm2/m128 while shifting in 0s (SSE2)."],["PSUBB","Subtract packed byte integers in xmm2/m128 from packed byte integers in xmm1 (SSE2)."],["PSUBD","Subtract packed doubleword integers in xmm2/m128 from doubleword byte integers in xmm1 (SSE2)."],["PSUBQ","Subtract packed quadword integers in xmm2/m128 from xmm1 (SSE2)."],["PSUBSB","Subtract packed signed byte integers in xmm2/m128 from packed signed byte integers in xmm1 and saturate results (SSE2)."],["PSUBSW","Subtract packed signed word integers in xmm2/m128 from packed signed word integers in xmm1 and saturate results (SSE2)."],["PSUBUSB","Subtract packed unsigned byte integers in xmm2/m128 from packed unsigned byte integers in xmm1 and saturate results (SSE2)."],["PSUBUSW","Subtract packed unsigned word integers in xmm2/m128 from packed unsigned word integers in xmm1 and saturate results (SSE2)."],["PSUBW","Subtract packed word integers in xmm2/m128 from packed word integers in xmm1 (SSE2)."],["PS_D_IMM","Shift doublewords in xmm1 by imm8; the direction and sign-bit behavior is controlled by the RRR digit used in the ModR/M byte (SSE2)."],["PS_Q_IMM","Shift quadwords in xmm1 by imm8; the direction and sign-bit behavior is controlled by the RRR digit used in the ModR/M byte (SSE2)."],["PS_W_IMM","Shift words in xmm1 by imm8; the direction and sign-bit behavior is controlled by the RRR digit used in the ModR/M byte (SSE2)."],["PTEST","Set ZF if xmm2/m128 AND xmm1 result is all 0s; set CF if xmm2/m128 AND NOT xmm1 result is all 0s (SSE4.1)."],["PUNPCKHBW","Unpack and interleave high-order bytes from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKHDQ","Unpack and interleave high-order doublewords from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKHQDQ","Unpack and interleave high-order quadwords from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKHWD","Unpack and interleave high-order words from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKLBW","Unpack and interleave low-order bytes from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKLDQ","Unpack and interleave low-order doublewords from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKLQDQ","Unpack and interleave low-order quadwords from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUNPCKLWD","Unpack and interleave low-order words from xmm1 and xmm2/m128 into xmm1 (SSE2)."],["PUSH_REG","Push r{16,32,64}."],["PXOR","Logical exclusive OR (SSE2)."],["RET_NEAR","Near return to calling procedure."],["ROTATE_CL","General rotation opcode. Kind of rotation depends on encoding."],["ROTATE_IMM8","General rotation opcode. Kind of rotation depends on encoding."],["ROUNDSD","Round scalar doubl-precision floating-point values."],["ROUNDSS","Round scalar single-precision floating-point values."],["SBB","Subtract with borrow r{16,32,64} from r/m of the same size."],["SET_BYTE_IF_OVERFLOW","Set byte if overflow (OF=1)."],["SQRTPD","Compute the square root of the packed double-precision floating-point values and store the result in xmm1 (SSE2)."],["SQRTPS","Compute the square root of the packed double-precision floating-point values and store the result in xmm1 (SSE)."],["SQRTSD","Compute square root of scalar double-precision floating-point value."],["SQRTSS","Compute square root of scalar single-precision value."],["SUB","Subtract r{16,32,64} from r/m of same size."],["SUBPD","Subtract packed double-precision floating-point values in xmm2/mem from xmm1 and store result in xmm1 (SSE2)."],["SUBPS","Subtract packed single-precision floating-point values in xmm2/mem from xmm1 and store result in xmm1 (SSE)."],["SUBSD","Subtract the low double-precision floating-point value in xmm2/m64 from xmm1 and store the result in xmm1."],["SUBSS","Subtract the low single-precision floating-point value in xmm2/m32 from xmm1 and store the result in xmm1."],["TEST_BYTE_REG","AND r8 with r/m8; set SF, ZF, PF according to result."],["TEST_REG","AND {r16, r32, r64} with r/m of the same size; set SF, ZF, PF according to result."],["TZCNT","Count the number of trailing zero bits."],["UCOMISD","Compare low double-precision floating-point values in xmm1 and xmm2/mem64 and set the EFLAGS flags accordingly."],["UCOMISS","Compare low single-precision floating-point values in xmm1 and xmm2/mem32 and set the EFLAGS flags accordingly."],["UNDEFINED2","Raise invalid opcode instruction."],["VCVTUDQ2PS","Convert four packed unsigned doubleword integers from xmm2/m128/m32bcst to packed single-precision floating-point values in xmm1 with writemask k1. Rounding behavior is controlled by MXCSR but can be overriden by EVEX.L'L in static rounding mode (AVX512VL, AVX512F)."],["VPMULLQ","Multiply the packed quadword signed integers in xmm2 and xmm3/m128 and store the low 64 bits of each product in xmm1 (AVX512VL/DQ). Requires an EVEX encoding."],["XOR","r/m{16,32,64} XOR register of the same size."],["XORB","r/m8 XOR r8."],["XORPD","Bitwise logical XOR of packed double-precision floating-point values."],["XORPS","Bitwise logical XOR of packed single-precision floating-point values."],["XOR_IMM","imm{16,32} XOR r/m{16,32,64}, possibly sign-extended."],["XOR_IMM8_SIGN_EXTEND","r/m{16,32,64} XOR sign-extended imm8."]]});