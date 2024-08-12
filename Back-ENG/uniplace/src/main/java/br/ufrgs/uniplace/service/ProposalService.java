
package br.ufrgs.uniplace.service;

import br.ufrgs.uniplace.respoitory.ProposalRepository;
import br.ufrgs.uniplace.model.Proposal;
import org.springframework.stereotype.Service;
import java.util.List;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class ProposalService {
    private final ProposalRepository repository;

    public List<Proposal> findProposalByidLocador(Long matricula) {
        return repository.findByidLocador(matricula);
    }

    public List<Proposal> findProposalByidLocatario(Long matricula) {
        return repository.findByidLocatario(matricula);
    }

    public Proposal saveProposal(Proposal proposal) {
        return repository.save(proposal);
    }

    public Proposal findProposalByidProposal(Long idProposal) {
        return repository.findProposalByidProposal(idProposal);
    }

    public void deleteProposal(Long id) {
        repository.deleteById(id);
    }

    ;
}


