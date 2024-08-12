package br.ufrgs.uniplace.respoitory;

import br.ufrgs.uniplace.model.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProposalRepository extends JpaRepository<Proposal, Long>{
    List<Proposal> findByidLocador(Long LocadorID);
    List<Proposal> findByidLocatario(Long LocatarioID);
    Proposal findProposalByidProposal(Long idProposal);


}