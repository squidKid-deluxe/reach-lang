// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3, ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc3, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  
  
  const v2 = await ctc.creationTime();
  const v0 = stdlib.protect(ctc0, interact.info, null);
  const v1 = stdlib.protect(ctc1, interact.request, null);
  const txn1 = await (ctc.sendrecv('Alice', 1, 1, stdlib.checkedBigNumberify('./index.rsh:13:9:dot', stdlib.UInt_max, 0), [ctc1, ctc1], [v2, v1], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:13:9:dot', stdlib.UInt_max, 0), v2]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:13:9:dot', stdlib.UInt_max, 0)]);
    const [v6] = txn1.data;
    const v7 = txn1.value;
    const v11 = txn1.time;
    const v5 = txn1.from;
    
    const v8 = stdlib.eq(v7, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v8, {
      at: './index.rsh:13:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Alice'
       });
    stdlib.assert(true, {
      at: './index.rsh:13:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
       });
    sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:14:15:after expr stmt semicolon', stdlib.UInt_max, 1), v5, v6, v11]);
    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:14:15:after expr stmt semicolon', stdlib.UInt_max, 1), v5, v6]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v6] = txn1.data;
  const v7 = txn1.value;
  const v11 = txn1.time;
  const v5 = txn1.from;
  const v8 = stdlib.eq(v7, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v8, {
    at: './index.rsh:13:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Alice'
     });
  stdlib.assert(true, {
    at: './index.rsh:13:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
     });
  const txn2 = await (ctc.recv('Alice', 2, 0, [], false, false));
  const [] = txn2.data;
  const v15 = txn2.value;
  const v19 = txn2.time;
  const v14 = txn2.from;
  const v16 = stdlib.eq(v15, v6);
  stdlib.assert(v16, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Alice'
     });
  stdlib.assert(true, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
     });
  const txn3 = await (ctc.sendrecv('Alice', 3, 1, stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 2), [ctc3, ctc1, ctc1, ctc0], [v5, v6, v19, v0], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 2), v5, v6, v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 2), v5, v6]);
    const [v23] = txn3.data;
    const v24 = txn3.value;
    const v29 = txn3.time;
    const v22 = txn3.from;
    
    const v25 = stdlib.eq(v24, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v25, {
      at: './index.rsh:23:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Alice'
       });
    const v26 = stdlib.addressEq(v5, v22);
    stdlib.assert(v26, {
      at: './index.rsh:23:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
       });
    sim_r.txns.push({
      amt: v6,
      to: v5
       });
    sim_r.nextSt = stdlib.digest(ctc2, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc2, []);
    sim_r.isHalt = true;
    
    return sim_r;
     })));
  const [v23] = txn3.data;
  const v24 = txn3.value;
  const v29 = txn3.time;
  const v22 = txn3.from;
  const v25 = stdlib.eq(v24, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v25, {
    at: './index.rsh:23:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Alice'
     });
  const v26 = stdlib.addressEq(v5, v22);
  stdlib.assert(v26, {
    at: './index.rsh:23:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
     });
  ;
  return;
  
  
  
   }
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc0]);
  
  
  const v2 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Bob', 1, 1, [ctc0], false, false));
  const [v6] = txn1.data;
  const v7 = txn1.value;
  const v11 = txn1.time;
  const v5 = txn1.from;
  const v8 = stdlib.eq(v7, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v8, {
    at: './index.rsh:13:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bob'
     });
  stdlib.assert(true, {
    at: './index.rsh:13:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
     });
  stdlib.protect(ctc1, await interact.want(v6), {
    at: './index.rsh:17:22:application',
    fs: ['at ./index.rsh:16:13:application call to [unknown function] (defined at: ./index.rsh:16:17:function exp)'],
    msg: 'want',
    who: 'Bob'
     });
  const txn2 = await (ctc.sendrecv('Bob', 2, 0, stdlib.checkedBigNumberify('./index.rsh:18:9:dot', stdlib.UInt_max, 2), [ctc3, ctc0, ctc0], [v5, v6, v11], v6, [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:18:9:dot', stdlib.UInt_max, 1), v5, v6, v11]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:18:9:dot', stdlib.UInt_max, 1), v5, v6]);
    const [] = txn2.data;
    const v15 = txn2.value;
    const v19 = txn2.time;
    const v14 = txn2.from;
    
    const v16 = stdlib.eq(v15, v6);
    stdlib.assert(v16, {
      at: './index.rsh:18:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Bob'
       });
    stdlib.assert(true, {
      at: './index.rsh:18:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
       });
    sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:19:15:after expr stmt semicolon', stdlib.UInt_max, 2), v5, v6, v19]);
    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:19:15:after expr stmt semicolon', stdlib.UInt_max, 2), v5, v6]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [] = txn2.data;
  const v15 = txn2.value;
  const v19 = txn2.time;
  const v14 = txn2.from;
  const v16 = stdlib.eq(v15, v6);
  stdlib.assert(v16, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bob'
     });
  stdlib.assert(true, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
     });
  const txn3 = await (ctc.recv('Bob', 3, 1, [ctc2], false, false));
  const [v23] = txn3.data;
  const v24 = txn3.value;
  const v29 = txn3.time;
  const v22 = txn3.from;
  const v25 = stdlib.eq(v24, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v25, {
    at: './index.rsh:23:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bob'
     });
  const v26 = stdlib.addressEq(v5, v22);
  stdlib.assert(v26, {
    at: './index.rsh:23:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
     });
  ;
  stdlib.protect(ctc1, await interact.got(v23), {
    at: './index.rsh:28:21:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'got',
    who: 'Bob'
     });
  return;
  
  
  
   }

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 5
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn CloseRemainderTo
global ZeroAddress
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 121, 249],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:13:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:13:9:dot"
// "[]"
int 1
assert
// compute state in HM_Set 1
int 1
itob
gtxn 3 Sender
concat
gtxna 0 ApplicationArgs 5
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:18:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:18:9:dot"
// "[]"
int 1
assert
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:23:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:23:9:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 6
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v2",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v6",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v5",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v6",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v11",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v5",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v6",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[128]",
                "name": "v23",
                "type": "uint8[128]"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v2",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v6",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v5",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v6",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v11",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v5",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v6",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[128]",
                "name": "v23",
                "type": "uint8[128]"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610764806100826000396000f3fe6080604052600436106100385760003560e01c80632438df70146100445780639532ef0114610059578063f512f77e1461006c5761003f565b3661003f57005b600080fd5b610057610052366004610618565b61007f565b005b610057610067366004610601565b61023f565b61005761007a366004610629565b6103ca565b6040516100939060019083906020016106e9565b6040516020818303038152906040528051906020012060001c6000541461010d5760405162461bcd60e51b815260206004820152602360248201527f737461746520636865636b206174202e2f696e6465782e7273683a31383a393a604482015262191bdd60ea1b60648201526084015b60405180910390fd5b60008055346020820135146101805760405162461bcd60e51b815260206004820152603360248201527f282e2f696e6465782e7273683a31383a393a646f742c5b5d2c4a757374202270604482015272617920616d6f756e7420636f7272656374222960681b6064820152608401610104565b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516101af9190610664565b60405180910390a16101e4604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b6101f160208301836105e0565b6001600160a01b03168152602080830135818301524360408084019190915251610220916002918491016106fd565b60408051601f1981840301815291905280516020909101206000555050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146102cb5760405162461bcd60e51b815260206004820152602360248201527f737461746520636865636b206174202e2f696e6465782e7273683a31333a393a604482015262191bdd60ea1b6064820152608401610104565b6000805534156103395760405162461bcd60e51b815260206004820152603360248201527f282e2f696e6465782e7273683a31333a393a646f742c5b5d2c4a757374202270604482015272617920616d6f756e7420636f7272656374222960681b6064820152608401610104565b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16103a3604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602080830135818301524360408084019190915251610220916001918491016106fd565b6040516103de9060029083906020016106e9565b6040516020818303038152906040528051906020012060001c600054146104535760405162461bcd60e51b815260206004820152602360248201527f737461746520636865636b206174202e2f696e6465782e7273683a32333a393a604482015262191bdd60ea1b6064820152608401610104565b6000805534156104c15760405162461bcd60e51b815260206004820152603360248201527f282e2f696e6465782e7273683a32333a393a646f742c5b5d2c4a757374202270604482015272617920616d6f756e7420636f7272656374222960681b6064820152608401610104565b336104cf60208301836105e0565b6001600160a01b03161461053d5760405162461bcd60e51b815260206004820152602f60248201527f282e2f696e6465782e7273683a32333a393a646f742c5b5d2c4a75737420227360448201526e656e64657220636f7272656374222960881b6064820152608401610104565b61054a60208201826105e0565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610585573d6000803e3d6000fd5b507f6ca511835aec60423a26d24cdbe1d3b53c20c6d05a3c891aed1744e1f97974bf816040516105b59190610694565b60405180910390a16000805533ff5b80356001600160a01b03811681146105db57600080fd5b919050565b6000602082840312156105f1578081fd5b6105fa826105c4565b9392505050565b600060408284031215610612578081fd5b50919050565b600060808284031215610612578081fd5b60006110608284031215610612578081fd5b6001600160a01b0361064c826105c4565b16825260208181013590830152604090810135910152565b60808101610672828461063b565b606083013580151580821461068657600080fd5b806060850152505092915050565b61106081016106a3828461063b565b60608201606084016000805b60808110156106df57823560ff81168082146106c9578384fd5b85525060209384019392909201916001016106af565b5050505092915050565b828152608081016105fa602083018461063b565b828152608081016105fa602083018480516001600160a01b031682526020808201519083015260409081015191015256fea26469706673582212207aff95a1e1e9964c1fc60ea43e98b059ee4929d02f67070e27aa79183e737e9264736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

