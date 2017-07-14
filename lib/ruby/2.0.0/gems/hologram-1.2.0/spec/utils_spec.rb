require 'spec_helper'

describe Hologram::Utils do
  context '.get_markdown_renderer' do
    subject(:utils) { Hologram::Utils }

    around do |example|
      Hologram::DisplayMessage.quiet!
      current_dir = Dir.pwd
      Dir.chdir('spec/fixtures/renderer')

      example.run

      Dir.chdir(current_dir)
      Hologram::DisplayMessage.show!
    end

    context 'by default' do
      let(:renderer) { utils.get_markdown_renderer }

      it 'returns the standard hologram markdown renderer' do
        expect(renderer).to eql Hologram::MarkdownRenderer
      end
    end

    context 'when passed a valid custom renderer' do
      let(:renderer) { utils.get_markdown_renderer('valid_renderer.rb') }

      it 'returns the custom renderer' do
        expect(renderer).to eql ValidRenderer
      end
    end

    context 'when passed an invalid custom renderer' do
      context 'expecting a class named as the upper camel cased version of the file name' do
        it 'exits' do
          expect {
            utils.get_markdown_renderer('invalid_renderer.rb')
          }.to raise_error SystemExit
        end
      end

      context 'expecting a filename.rb' do
        it 'exits' do
          expect {
            utils.get_markdown_renderer('foo')
          }.to raise_error Errno::ENOENT
        end
      end
    end
  end
end
