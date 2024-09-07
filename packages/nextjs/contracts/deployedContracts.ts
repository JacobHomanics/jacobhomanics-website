/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  8453: {
    Organizations: {
      address: "0x7aea3f08195328bab13fc14ff7b5f4be2ede7a09",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "configs",
              type: "tuple[]",
              internalType: "struct Organizations.Config[]",
              components: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "url",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "icon",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
            {
              name: "authorizedUser",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addConfig",
          inputs: [
            {
              name: "config",
              type: "tuple",
              internalType: "struct Organizations.Config",
              components: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "url",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "icon",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getData",
          inputs: [
            {
              name: "orgId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Organizations.Config",
              components: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "url",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "icon",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getOrgCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "error",
          name: "NotAuthorized",
          inputs: [],
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0xac859df47347ad8610c79f448ca329c89a82c8e7",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "greeting",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "premium",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setGreeting",
          inputs: [
            {
              name: "_newGreeting",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "totalCounter",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "userGreetingCounter",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "GreetingChange",
          inputs: [
            {
              name: "greetingSetter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newGreeting",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "premium",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
    },
  },
  31337: {
    Organizations: {
      address: "0xb7278a61aa25c888815afc32ad3cc52ff24fe575",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "configs",
              type: "tuple[]",
              internalType: "struct Organizations.Config[]",
              components: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "url",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "icon",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
            {
              name: "authorizedUser",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addConfig",
          inputs: [
            {
              name: "config",
              type: "tuple",
              internalType: "struct Organizations.Config",
              components: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "url",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "icon",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getData",
          inputs: [
            {
              name: "orgId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Organizations.Config",
              components: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "url",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "icon",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getOrgCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "error",
          name: "NotAuthorized",
          inputs: [],
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0xcd8a1c3ba11cf5ecfa6267617243239504a98d90",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "greeting",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "premium",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setGreeting",
          inputs: [
            {
              name: "_newGreeting",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "totalCounter",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "userGreetingCounter",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "GreetingChange",
          inputs: [
            {
              name: "greetingSetter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newGreeting",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "premium",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
