require 'spec_helper'
require 'hologram/cli'

describe Hologram::CLI do
  let(:argv) { [] }
  subject(:cli) { Hologram::CLI.new(argv) }

  context '#run' do
    context 'when arg is "init"' do
      let(:argv) { ['init'] }

      it 'setups the dir' do
        expect(Hologram::DocBuilder).to receive(:setup_dir)
        cli.run
      end
    end

    context 'when arg is empty' do
      subject(:builder) { double(Hologram::DocBuilder, is_valid?: true, build: true) }

      it 'builds the documentation' do
        expect(Hologram::DocBuilder).to receive(:from_yaml).and_return(builder)
        cli.run
      end
    end

    context 'when a config file is passed' do
      let(:argv) { ['test.yml'] }
      subject(:builder) { double(Hologram::DocBuilder, is_valid?: true, build: true) }

      it 'builds the documentation' do
        expect(Hologram::DocBuilder).to receive(:from_yaml).with('test.yml', []).and_return(builder)
        cli.run
      end
    end
  end
end
