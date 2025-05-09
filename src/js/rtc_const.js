/**
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Timeout waiting for server response to accept/hangup request.
 */
export const MAX_ACCEPT_BYE_DELAY_MS = 2000;
/**
 * Timeout waiting for server response to invite.
 */
export const MAX_INVITE_DELAY_MS = 5000;
/**
 *  Default timeout on opening WebSocket connection.
 */
export const DEFAULT_CONNECT_TIMEOUT_MS = 10000;
/**
 * Default ice collection timeout in milliseconds.
 */
export const DEFAULT_ICE_TIMEOUT_MS = 8000;
/**
 * Default gum timeout in milliseconds to be enforced during start of a call.
 */
export const DEFAULT_GUM_TIMEOUT_MS = 10000;

export const SOFTPHONE_ROUTE_KEY = "aws/softphone";

export const INVITE_METHOD_NAME = "invite";
export const ACCEPT_METHOD_NAME = "accept";
export const BYE_METHOD_NAME = "bye";
export const PC_BYE_METHOD_NAME = "PCBye";
export const CONNECT_CONTACT_METHOD_NAME = "connectContact";
export const DISCONNECT_CONTACT_METHOD_NAME = "disconnectContact";

export const RTC_PEER_CONNECTION_CONFIG = {
    iceTransportPolicy: 'relay',
    rtcpMuxPolicy: 'require',
    bundlePolicy: 'balanced',
    sdpSemantics: 'unified-plan',
    enableDtlsSrtp: true
};

export const RTC_PEER_CONNECTION_OPTIONAL_CONFIG = {
    optional: [
        {
            googDscp: true

        },
        {
            DtlsSrtpKeyAgreement: true
        }
    ]
};

export const DEFAULT_ICE_CANDIDATE_POOL_SIZE = 1;

export const RTC_PEER_CONNECTION_IDLE_TIMEOUT_MS = 1*60*1000;

export const NETWORK_CONNECTIVITY_CHECK_INTERVAL_MS = 250;

export const CHROME_SUPPORTED_VERSION = 59;

/**
 * RTC error names.
 */
export const RTC_ERRORS = {
    ICE_COLLECTION_TIMEOUT : 'Ice Collection Timeout',
    USER_BUSY : 'User Busy',
    SIGNALLING_CONNECTION_FAILURE : 'Signalling Connection Failure',
    SIGNALLING_HANDSHAKE_FAILURE : 'Signalling Handshake Failure',
    SET_REMOTE_DESCRIPTION_FAILURE : 'Set Remote Description Failure',
    CREATE_OFFER_FAILURE : 'Create Offer Failure',
    SET_LOCAL_DESCRIPTION_FAILURE : 'Set Local Description Failure',
    INVALID_REMOTE_SDP : 'Invalid Remote SDP',
    NO_REMOTE_ICE_CANDIDATE : 'No Remote ICE Candidate',
    GUM_TIMEOUT_FAILURE : 'GUM Timeout Failure',
    GUM_OTHER_FAILURE : 'GUM Other Failure',
    CALL_NOT_FOUND: 'Call Not Found',
    ACCESS_DENIED: 'Access Denied'
};

export const ICE_CONNECTION_STATE = {
    NEW : 'new',
    CHECKING : 'checking',
    CONNECTED : 'connected',
    COMPLETED : 'completed',
    FAILED : 'failed',
    DISCONNECTED : 'disconnected',
    CLOSED : 'closed'
};

export const PEER_CONNECTION_STATE = {
    NEW : 'new',
    CONNECTING : 'connecting',
    CONNECTED : 'connected',
    FAILED : 'failed',
    DISCONNECTED : 'disconnected',
    CLOSED : 'closed'
};

export const RTC_SESSION_STATE = {
    TALKING_STATE: 'TalkingState',
    GRAB_LOCAL_MEDIA_STATE: 'GrabLocalMediaState',
    CREATE_OFFER_STATE: 'CreateOfferState',
    SET_LOCAL_SESSION_DESCRIPTION_STATE: 'SetLocalSessionDescriptionState',
    CONNECT_SIGNALING_AND_ICE_COLLECTION_STATE: 'ConnectSignalingAndIceCollectionState',
    INVITE_ANSWER_STATE: 'InviteAnswerState',
    ACCEPT_STATE: 'AcceptState',
    CONNECT_CONTACT_STATE: 'ConnectContactState',
    CLEAN_UP_STATE: 'CleanUpState',
    DISCONNECTED_STATE: 'DisconnectedState'
}

export const BROWSER_LIST = ['Google Chrome', 'Microsoft Edge', 'Firefox'];

export const FIREFOX = "Firefox";
export const ACITVE_SOFTPHONE_TAB = "Active Softphone Tab";