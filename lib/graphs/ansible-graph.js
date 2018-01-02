// Copyright © 2017 Dell Inc. or its subsidiaries. All Rights Reserved.

'use strict';

module.exports = {
    friendlyName: 'Graph Ansible',
    injectableName: 'Graph.Ansible',
    options: {
        'run-ansible': {
            playbook: null
        }
    },
    tasks: [
        {
            label: 'run-ansible',
            taskName: 'Task.Ansible'
        }
    ]
};
