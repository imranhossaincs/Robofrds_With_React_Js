import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';

export default function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    return config;
};