/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'sgdemo-pokemon': {
    // Dependent systems
    depends: ["redis"],
    // More images:  http://images.azk.io
    image: {"docker": "azukiapp/node:0.10"},
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "npm start",
    wait: {"retry": 20, "timeout": 1000},
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    envs: {
      // set instances variables
      NODE_ENV: "dev",
    },
    export_envs: {
      APP_URL: "#{azk.default_domain}:#{net.port.http}",
      HTTPS_PORT: "#{azk.default_domain}:#{net.port.http}"
    },
  },
  redis: {
    image: { docker: "redis" },
    export_envs: {
      "DATABASE_URL": "redis://#{net.host}:#{net.port[6379]}"
    }
  },
  ngrok: {
    // Dependent systems
    depends: ["sgdemo-pokemon"],
    image     : {"docker" : "azukiapp/ngrok"},
    // Mounts folders to assigned paths
    mounts: {
      // equivalent persistent_folders
      '/ngrok/log' : path("./log"),
    },
    scalable: {"default": 1},
    // do not expect application response
    wait: false,
    http      : {
      domains: [ "#{manifest.dir}-#{system.name}.#{azk.default_domain}" ],
    },
    ports     : {
      http : "4040"
    },
    envs      : {
      NGROK_LOG       : "/ngrok/log/ngrok.log",
      NGROK_SUBDOMAIN : "sgdemo-pokemon",
      NGROK_AUTH      : "rTz5WboOOSMqVrFudJ1C",
      NGROK_CONFIG    : "/ngrok/ngrok.yml",
    }
  }
});



